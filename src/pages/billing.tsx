<ul className="grid grid-cols-2 gap-4">
  {invoices.map((invoice, index) => (
    <li key={index} className="shadow-lg p-4 rounded-lg bg-white">
      <p><strong>{invoice.date}</strong></p>
      <p>{invoice.name} - ₹{invoice.amount}</p>
    </li>
  ))}
</ul>
