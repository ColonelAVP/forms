import React from "react";
import { useFormik, validateYupSchema } from "formik";
import axios from "axios";
import * as yup from "yup";

const BasicForm = (props) => {
  // Fomik Logics
  const formik = useFormik({
    initialValues: { newspaper: "", City: "", sub: "" },

    onSubmit: (values) => {
      console.log(values);
    },

    validateYupSchema: yup.object({}),
  });

  const fileUploadHandler = () => {
    axios.post();
  };

  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="name">News paper name</label>
            <select
              name="newspaper"
              className="form-select col-md-3"
              value={formik.values.NewsPaperName}
              onChange={formik.handleChange}
            >
              <option value="">-select--</option>
              <option>Ahmedabad Mirror</option>
              <option>Arunachal Front</option>
              <option>Asian Age</option>
              <option>Business Line</option>
              <option>Business Standard</option>
              <option>Daily Excelsior</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="name">City</label>
            <select
              name="City"
              className="form-select col-md-3"
              value={formik.values.city}
              onChange={formik.handleChange}
            >
              <option value="">-select--</option>
              <option>Ahmedabad Mirror</option>
              <option>Arunachal Front</option>
              <option>Asian Age</option>
              <option>Business Line</option>
              <option>Business Standard</option>
              <option>Daily Excelsior</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="name">Sub</label>
          <select
            className="form-select col-md-3"
            value={formik.values.Sub}
            onChange={formik.handleChange}
          >
            <option>--select--</option>
            <option>Ahmedabad Mirror</option>
            <option>Arunachal Front</option>
            <option>Asian Age</option>
            <option>Business Line</option>
            <option>Business Standard</option>
            <option>Daily Excelsior</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="name">Upload image</label>
          <input
            type="file"
            onChange={fileUploadHandler}
            value={formik.values.image}
          />
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default BasicForm;

// API fetching
// const [users, setUsers] = useState([]);
// const [singleUser, setSingleUser] = useState([]);
// const [selectedfile, setSelectedFile] = useState([]);
// useEffect(function () {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => setUsers(response.data))
//     .then((error) => console.log(error));
// }, []);

// const onddlChange = (event) => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users" + event.target.value)
//     .then((response) => setSingleUser(response.data))
//     .then((error) => console.log(error));
// };

// const selectedFileHandler = (event) => {
//   setSelectedFile({
//     selectedfile: event.target.files[0],
//   });
// };
