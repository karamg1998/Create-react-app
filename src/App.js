import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import AllJobs from "./components/All-jobs/Alljobs";
import AppliedJobs from "./components/applied-jobs/Applied";
import SimilarJobs from "./components/similar-jobs/Similar";
import Profile from "./components/profile/Profile";
import Editprofile from "./components/edit-profile/Editprofile";
import Forgot from "./components/forgot/Forgot";
import Pass from "./components/set-password/Pass";
import PostJobs from "./recruiter/postjob/Postjobs";
import YourJobs from "./recruiter/your-job/Yourjob";
import Interested from "./recruiter/interested/Interested";
import Recprofile from "./recruiter/profile/Profile";
import Editrecprofile from "./recruiter/edit-profile/Editprofile";

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/signup" element={<Signup></Signup>}/>
    <Route path="/" element={<Login></Login>}/>
    <Route path="/home/alljobs" element={<AllJobs></AllJobs>}/>
    <Route path="/home/appliedjobs" element={<AppliedJobs></AppliedJobs>}/>
    <Route path="/home/similarjobs" element={<SimilarJobs></SimilarJobs>}/>
    <Route path="/home/profile" element={<Profile></Profile>}/>
    <Route path="/home/profile/edit" element={<Editprofile></Editprofile>}/>
    <Route path="/forgot" element={<Forgot></Forgot>}/>
    <Route path="/forgot/setpass" element={<Pass></Pass>}/>
    <Route path="/rec/postjob" element={<PostJobs></PostJobs>}/>
    <Route path="/rec/yourjobs" element={<YourJobs></YourJobs>}/>
    <Route path="/rec/interested" element={<Interested></Interested>}/>
    <Route path="/rec/profile" element={<Recprofile></Recprofile>}/>
    <Route path="/rec/profile/edit" element={<Editrecprofile></Editrecprofile>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
