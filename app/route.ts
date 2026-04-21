import { NextResponse } from "next/server";
import { addOrderEvent, getOrderByCode, updateOrderStatus } from "@/lib/orders";
import { fulfillPaidOrder } from "@/lib/fulfillment";
import { mapMidtransStatus } from "@/lib/midtrans";

export async function POST(req: Request) {
  const body = await req.json();

  const orderCode = body.order_id;
  const mapped = mapMidtransStatus(body.transaction_status, body.fraud_status);
  const order = await getOrderByCode(orderCode);

  if (!order) {
    return NextResponse.json({ message: "Order tidak ditemukan" }, { status: 404 });
  }

  await addOrderEvent(order.id, "midtrans", "notification", body);

  const updated = await updateOrderStatus(orderCode, {
    payment_status: mapped,
    payment_reference: body.transaction_id || null,
    raw_payment: body,
  });

  if (mapped === "paid" && updated.fulfillment_status === "queued") {
    await fulfillPaidOrder(orderCode);
  }

  return NextResponse.json({ ok: true });
}
