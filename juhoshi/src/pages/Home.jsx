import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import Axios from "axios";
const Home = (props) => {
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    company: "",
    owner: "",
    item: "",
    quantity: "",
    weight: "",
    count: "",
    date: "",
    specification: "",
  });
  useEffect;
  const handleonSubmit = () => {
    const formData = {
      uid: props.user.uid,

      company: detail.company,
      owner: detail.owner,
      item: detail.item,
      quantity: detail.quantity,
      weight: detail.weight,
      count: detail.count,
      date: detail.date,
      specification: detail.specification,
    };
    console.log(formData);
    Axios.post(`${host}/api/form`, { formData })
      .then((res) => {
        // console.log(res);
        setDetail({
          company: "",
          owner: "",
          item: "",
          quantity: "",
          weight: "",
          count: "",
          date: "",
          specification: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignout = () => {
    signOut(auth)
      .then((res) => {
        // console.log(user)
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  return (
    <div>
      <div className="flex flex-row-reverse backdrop-blur-3xl bg-white/30 sm:px-60 px-5 border-b sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
        <div className="flex-none">
          {props.user.uid ? (
            <button
              onClick={handleSignout}
              className="hover:shadow-form rounded-md bg-[#b31515b7] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              SignOut
            </button>
          ) : (
            <button
              onClick={handleSignout}
              className="hover:shadow-form rounded-md bg-[#b31515b7] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="Company"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company
                </label>
                <input
                  value={detail.company}
                  type="text"
                  name="Company"
                  id="Company"
                  onChange={(event) =>
                    setDetail((prev) => ({
                      ...prev,
                      company: event.target.value,
                    }))
                  }
                  placeholder="Company"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="Owner"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Owner Name
                </label>
                <input
                  value={detail.owner}
                  onChange={(event) =>
                    setDetail((prev) => ({
                      ...prev,
                      owner: event.target.value,
                    }))
                  }
                  type="text"
                  name="Owner"
                  id="Owner"
                  placeholder="Owner Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Item name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Item Name
            </label>
            <input
              value={detail.item}
              onChange={(event) =>
                setDetail((prev) => ({
                  ...prev,
                  item: event.target.value,
                }))
              }
              type="text"
              name="iname"
              id="iname"
              placeholder="Item"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Quantity"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Quantity
            </label>
            <input
              value={detail.quantity}
              onChange={(event) =>
                setDetail((prev) => ({
                  ...prev,
                  quantity: event.target.value,
                }))
              }
              type="number"
              name="Quantity"
              id="Quantity"
              placeholder="1"
              min="1"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Count"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Box Count
            </label>
            <input
              value={detail.count}
              onChange={(event) =>
                setDetail((prev) => ({
                  ...prev,
                  count: event.target.value,
                }))
              }
              type="number"
              name="Count"
              id="Count"
              placeholder="1"
              min="1"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="Weight"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Weight
            </label>
            <input
              value={detail.weight}
              onChange={(event) =>
                setDetail((prev) => ({
                  ...prev,
                  weight: event.target.value,
                }))
              }
              type="number"
              name="Weight"
              id="Weight"
              placeholder="1.00"
              step="0.01"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  value={detail.date}
                  onChange={(event) =>
                    setDetail((prev) => ({
                      ...prev,
                      date: event.target.value,
                    }))
                  }
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Specification
            </label>
            <textarea
              value={detail.specification}
              onChange={(event) =>
                setDetail((prev) => ({
                  ...prev,
                  specification: event.target.value,
                }))
              }
              rows="4"
              name="message"
              id="message"
              placeholder="Write your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              onClick={handleonSubmit}
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* <h1>
        <Link to="/login">login</Link>
      </h1>
      <br />
      <h1>
        <Link to="/signup">SignUp</Link>
      </h1>
      <h2>{props.name ? `welcome ${props.name}` : "login pls"}</h2> */}
    </div>
  );
};

export default Home;
