export const Tickets = () => {
  return (
    <div>
      <h2 className="mt-20">Tickets</h2>
      <table className="mt-5 table w-full border border-zinc-500 border-collapse">
        <thead className="text-lg font-bold">
          <td className="border border-zinc-500 p-3">Tickets</td>
          <td className="border border-zinc-500 p-3">Price</td>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">
              Single Day Ticket
            </td>
            <td className="border border-zinc-500 py-2 px-3">300 NOK</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">
              Two Days Ticket
            </td>
            <td className="border border-zinc-500 py-2 px-3">500 NOK</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">Full Pass</td>
            <td className="border border-zinc-500 py-2 px-3">800 NOK</td>
          </tr>
        </tbody>
        <caption className="caption-bottom my-4">
          Once they're gone, they're gone
        </caption>
      </table>
    </div>
  );
};
