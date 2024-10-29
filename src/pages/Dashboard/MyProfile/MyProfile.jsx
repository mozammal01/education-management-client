import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userInfo , refetch} = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/details/user/${user?.email}`)
      return res.data
    }
  })
  console.log(userInfo);

  const handleAddPhoneNumber = async() => {
    const phone = document.getElementById('addPhone').value;
    const phoneNumber = {phone}
    console.log(phoneNumber);

    const res = await axiosSecure.patch(`/phone/number/${userInfo?.email}`, phoneNumber)
    if(res.data.modifiedCount> 0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Phone Number Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
    console.log(res.data);
    refetch();

  }

  const handleUpdatePhoneNumber = async() => {
    const phone = document.getElementById('updatePhone').value;
    const phoneNumber = {phone}
    console.log(phoneNumber);

    const res = await axiosSecure.patch(`/phone/number/${userInfo?.email}`, phoneNumber)
    if(res.data.modifiedCount> 0){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Phone Number Updated",
        showConfirmButton: false,
        timer: 1500
      });
    }
    console.log(res.data);
    refetch();

  }

  return (
    <div>
      <h1 className="text-5xl">Profile</h1>
      <div className="my-10 font-bold space-y-5">

        {/* Photo */}
        {userInfo?.photoUrl &&
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={userInfo?.photoUrl} />
            </div>
          </div>
        }

        {/* Name */}
        <h3 className="text-xl">Name: {userInfo?.name}</h3>

        {/* Email */}
        <h3 className="text-xl">Email: {userInfo?.email}</h3>

        {/* Phone */}
        {userInfo?.phone ?
          <h3 className="text-xl flex items-center justify-start">Phone: <input id="updatePhone" className="border-2 rounded-xl ms-2 px-1" type="number" defaultValue={userInfo?.phone} /><button onClick={handleUpdatePhoneNumber} className="btn-md">Update Phone Number</button></h3>
          :
          <h3 className="text-xl flex items-center justify-start">Phone: <input id="addPhone" className="border-2 rounded-xl ms-2 px-1" type="number" /><button onClick={handleAddPhoneNumber} className="btn-md">Add Phone Number</button></h3>
        }

        {/* Role */}
        <h3 className="text-xl">Role: <span className="uppercase">{userInfo?.role}</span></h3>
      </div>
    </div>
  );
};

export default MyProfile;