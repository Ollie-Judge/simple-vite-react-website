import Input from "./Input";
import "../style/generalInfo.css";

function GeneralInfo() {
  return (
    <form id="basicInfoForm">
      <label htmlFor="firstName">
        First Name:
        <Input type="text" placeholder="First Name" />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <Input type="text" placeholder="Last Name" />
      </label>
      <button type="submit" id="basicInfoSubmit">
        Submit
      </button>
    </form>
  );
}

export default GeneralInfo;
