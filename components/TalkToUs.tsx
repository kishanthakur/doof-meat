import React from "react";

function TalkToUs() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6 mt-10">Talk to us!</h1>
      <div className="flex flex-wrap flex-col">
        <div className="mb-2">
          <p className="font-bold">Offline store : </p>SRC Godown No.78, Ward
          12/B, Khanna Market, Gandhidham, Gujarat - India 370201
        </div>{" "}
        <div className="mb-2">
          Visit us, talk to us and about us, shop, return used packaging or give
          us more good ideas.
        </div>{" "}
        <div className=" mb-2">
          <p className="font-bold">Email us :</p>{" "}
          heydoof@doofdoof.in/doofdesk@gmail.com
        </div>{" "}
        <div className="mb-2">
          <div className="flex flex-row">
            <p className="font-bold">Call or Whatsapp us : </p> 6-359-359-000
          </div>
        </div>{" "}
        <div className=" mb-2">Anonymous suggestion box</div>{" "}
        <div className="mb-2">FSSAI NO. : 20723013000201</div>{" "}
      </div>
    </>
  );
}

export default TalkToUs;
