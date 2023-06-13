import React from "react";
import { Card, Form } from "react-bootstrap";

function Background() {
  return (
    <div style={{ width:"100%", display: "flex", flexDirection: "row", justifyContent:"space-between", paddingRight:"0", backgroundColor: "#DEEED6", maxHeight:"428px"}}>
      <div style={{width:"80%"}}>
        <Card
          style={{
            width: "1300px",
            minHeight: "428px",
            marginBottom: "50px",
            backgroundColor: "#DEEED6",
          }}
          className="text-black"
        >
          <div
            style={{
              top: "auto",
              width: "578px",
              marginLeft: "100px",
              marginBottom: "50px",
              marginTop: "0",
              paddingTop: "75px",
            }}
          >
            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group style={{ paddingLeft: "0"}}
                
                
              >
                <Form.Control
                  style={{width: "60%", marginLeft:"0", height: "16px"}}
                  type="text"
                  placeholder="   Enter your address                                         "
                 />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
        
      <div style={{width:"20%", margingRight:"0", paddingRight: "0"}}>
          <img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" />
      </div>
</div>
  );
}

export default Background;
