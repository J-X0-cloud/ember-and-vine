import { Fragment } from "react";
import { hoursTable } from "@/lib/data/hours";

export function HoursTable() {
  return (
    <table className="hours">
      <caption>Opening hours</caption>
      <tbody>
        {hoursTable.map((row) => (
          <tr key={row.days}>
            <th scope="row">{row.days}</th>
            <td>
              {row.lines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
