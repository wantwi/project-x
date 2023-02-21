import React, { useRef, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { customAxios } from "../../api/axios";



const DonationAmount = ({ id }) => {
  const paymentAmount = useRef(null);
  const [amt, setAmt] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: "donation@bigsmile.com",
    currency: "GHS",
    publicKey: "pk_test_5a1a1e0140d5bbe924c71177355a21e17367616c",
  };

  const postDonationPayment = async (reference) => {
 
   
    try {
      const response = await customAxios.post("/Donations", {
        donorId: "",
        donorName: "",
        donorLocation: "",
        campaignId: id,
        donatedDate: new Date().toJSON(),
        remarks: "",
        amount: paymentAmount.current,
        currencyId: "0A0F1B90-0980-482E-A533-E6337DA5D295",
        paymentReferenceId: reference,
      });

      console.log({ postDonationPayment: response });
    } catch (error) {
      console.error({ error });
    }
  };

  const onSuccess = (reference) => {
    //reference
    postDonationPayment(reference?.reference);
    paymentAmount.current = null
    setAmt("")
  };

  const onClose = () => { 
    console.log("closed");
    paymentAmount.current = null
    setAmt("")
  };

  const PaystackHookExample = ({ amount }) => {
    paymentAmount.current = amount * 100
   
    const initializePayment = usePaystackPayment({
      ...config,
      amount: amount * 100,
    });

    return (
      <div>
        <button
          className="btn d-inline-block btn-success"
          style={{ width: "100%" }}
         
          onClick={() => {
           
            initializePayment(onSuccess, onClose);
          }}
        >
          Paystack
        </button>
      </div>
    );
  };

 
  return (
    <div className="amt-card">
      <h3 className="mb-3 ">Donate</h3>
      <div className="d-box">
        <p>GHS 20</p>
        <PaystackHookExample amount={20} />
      </div>
      <div className="d-box">
        <p>GHS 50</p>
        <PaystackHookExample amount={50} />
      </div>
      <div className="d-box">
        <p>GHS 100</p>
        <PaystackHookExample amount={100} />
      </div>
      <div className="d-box">
        <div style={{ padding: 20 }}>
          <input
            onChange={(e) => setAmt(e.target.value)}
            name="amt"
            value={amt}
            placeholder="Please enter any amount"
            className="form-control"
          />
        </div>

        {/* <button className="btn d-inline-block btn-success">Donate</button> */}
        <PaystackHookExample amount={amt} />
      </div>

      {/* <PaystackHookExample   /> */}
    </div>
  );
};

export default DonationAmount;
