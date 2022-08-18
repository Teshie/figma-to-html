import React, { useState } from "react";
import "./App.css";
import { Formik, Field, Form } from "formik";
import { resources } from "./data";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function App() {
  const [checkAll, setCheckAll] = useState(true);
  const [checkBox, setCheckBox] = useState();
  const [text, setText] = useState("User");
  const [taxx, setTax] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className="App"
      style={{
        marginTop: "100px",
        border: "1px solid gray",
        padding: "30px",
        margin: "20px",
      }}
    >
      <Formik
        initialValues={{
          applicable_items: [],
          tax: taxx / 100,
          name: text,
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                value={text}
                onValueChange={(e) => setText(e.target.value)}
                type="text"
                style={{ marginRight: "20px" }}
              />
              <br></br>

              <input
                type="number"
                value={taxx}
                onValueChange={(e) => setTax(e.target.value)}
              />
            </div>
            {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}

            {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label>
                <Field type="checkbox" name="name" value="jksnhd" />
              </label>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label style={{ marginBottom: "30px" }}>
                <Field type="radio" name="applied_to" value="all" />
                Apply to all items in collection
              </label>
              <label>
                <Field type="radio" name="applied_to" checked value="some" />
                Apply to specific items
              </label>
            </div>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
              />
            </div>

            <div style={{ paddingBottom: "50px" }} id="checkbox-group"></div>
            <label style={{ marginRight: "100px" }}>Bracelets</label>
            {resources
              .filter(
                (category) =>
                  category?.category?.name === "Bracelets" &&
                  category?.name.match(new RegExp(searchValue, "i"))
              )
              .map((items) => {
                return (
                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field
                        type="checkbox"
                        name="applicable_items"
                        value={`${items.id}`}
                        style={{ textAlignment: "right" }}
                      />
                      {items.name}
                    </label>
                  </div>
                );
              })}
            <div style={{ paddingTop: "50px" }}>
              <label style={{ marginRight: "100px", paddingTop: "50px" }}>
                Others
              </label>
              {resources
                .filter(
                  (category) =>
                    category?.category?.name !== "Bracelets" &&
                    category?.name.match(new RegExp(searchValue, "i"))
                )
                .map((items) => {
                  return (
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>
                        <Field
                          type="checkbox"
                          name="applicable_items"
                          value={`${items.id}`}
                          style={{ marginRight: "20px" }}
                        />
                        {items.name}
                      </label>
                    </div>
                  );
                })}
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button type="submit">
                Apply tax to <p>{values.applicable_items.length} items</p>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
