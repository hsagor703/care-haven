export const orderInvoiceTemplate = ({ orderId, items, totalPrice }) => {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h2>🧾 Order Invoice</h2>
      <p>Order ID: <strong>${orderId}</strong></p>
      <div style="display: flex; gap: 8px; align-items: center; background: black; padding: 20px;">
                <img
                  alt="care haven"
                  src="https://i.ibb.co.com/v4jHPjF2/logo.png"
                  width="24px"
                  height="24px"
                />
                <span  style="background: linear-gradient(to right, #4ade80, #fb923c);background-clip: text;-webkit-background-clip: text;color: transparent;">
                  Care Haven
                </span>
              </div>
      <table width="100%" border="1" cellspacing="0" cellpadding="8">
        <thead>
          <tr>
            <th align="left">Product</th>
            <th>Qty</th>
            <th>Service Price</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>${items?.ServiceName}</td>
              <td align="center">${items?.durationText}</td>
              <td align="center">Hourly ৳${items?.servicePrice?.Hourly} | Daily ৳${items?.servicePrice?.Daily} | Monthly ৳${items?.servicePrice?.Monthly} </td>
            </tr>
        </tbody>
      </table>

      <h3 style="margin-top: 20px;">Total: ৳${totalPrice}</h3>

      <p>Thank you for connection with Care Haven ❤️</p>
    </div>
  `;
};
