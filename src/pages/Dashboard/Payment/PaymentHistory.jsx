import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`)
      return res.data
    }
  })
  console.log(payments);

  return (
    <div className="p-5">
      <h1 className="text-5xl">You can See your Payments here : {payments?.length}</h1>
      <div>

        <table className="table my-20">

          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>TransactionId</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              payments?.map((payment, i) => <tr key={i}>
                <th>{i + 1}</th>
                <td>{payment?.email}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.date}</td>
                <td>{payment?.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;