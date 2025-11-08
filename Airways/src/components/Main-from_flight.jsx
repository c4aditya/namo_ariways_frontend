export default function MainFlightTicketForm() {
  return (
    <>
      <div className="booking-form-w3layouts mairgn">
        <form action="#" method="post">
          <h2 className="sub-heading-agileits">Booking Details</h2>

          <div className="main-flex-w3ls-sectns">
            <div className="field-agileinfo-spc form-w3-agile-text1">
              <select className="form-control">
                <option>From</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
              </select>
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text2">
              <select className="form-control">
                <option>To</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
                <option value="Lorem Ipsum">Lorem Ipsum</option>
                <option value="Adipiscing">Adipiscing</option>
              </select>
            </div>
          </div>

          <div className="main-flex-w3ls-sectns">
            <div className="field-agileinfo-spc form-w3-agile-text1">
              <select className="form-control">
                <option>Preferred Airline</option>
                <option value="American Airline">American Airline</option>
                <option value="Delta Airlines">Delta Airlines</option>
                <option value="Frontier Airline">Frontier Airline</option>
                <option value="Jet Blue">Jet Blue</option>
                <option value="Southwest Airlines">Southwest Airlines</option>
              </select>
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text2">
              <select className="form-control">
                <option>Preferred Seating</option>
                <option value="Window">Window</option>
                <option value="Aisle">Aisle</option>
                <option value="Special">Special (Request note below)</option>
              </select>
            </div>
          </div>

          <div className="main-flex-w3ls-sectns">
            <div className="field-agileinfo-spc form-w3-agile-text1">
              <input
                id="datepicker"
                name="Text"
                type="text"
                placeholder="Departure Date"
                required
              />
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text2">
              <input
                type="text"
                id="timepicker"
                name="Time"
                className="timepicker form-control hasWickedpicker"
                placeholder="Departure Time"
              />
            </div>
          </div>

          <div className="triple-wthree">
            <div className="field-agileinfo-spc form-w3-agile-text11">
              <select className="form-control">
                <option value="">Adult(12+ Yrs)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text22">
              <select className="form-control">
                <option value="">Children(2-11 Yrs)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text33">
              <select className="form-control">
                <option value="">Infant(under 2Yrs)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>

          <div className="radio-section">
            <h6>Select your Fare</h6>
            <ul className="radio-buttons-w3-agileits">
              <li>
                <input type="radio" id="a-option" name="selector1" />
                <label htmlFor="a-option">One Way</label>
                <div className="check"></div>
              </li>
              <li>
                <input type="radio" id="b-option" name="selector1" />
                <label htmlFor="b-option">Round-Trip</label>
                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
            </ul>
            <div className="clear"></div>
          </div>

          <div className="main-flex-w3ls-sectns">
            <div className="field-agileinfo-spc form-w3-agile-text1">
              <input
                id="datepicker1"
                name="Text"
                type="text"
                placeholder="Return Date"
                required
              />
            </div>

            <div className="field-agileinfo-spc form-w3-agile-text2">
              <input
                type="text"
                id="timepicker1"
                name="Time"
                className="timepicker form-control hasWickedpicker"
                placeholder="Return Time"
              />
            </div>
          </div>

          <div className="field-agileinfo-spc form-w3-agile-text">
            <textarea name="Message" placeholder="Any Message..."></textarea>
          </div>

          <h3 className="sub-heading-agileits">Personal Details</h3>

          <div className="main-flex-w3ls-sectns">
            <div className="field-agileinfo-spc form-w3-agile-text1">
              <input type="text" name="Name" placeholder="Full Name" required />
            </div>
            <div className="field-agileinfo-spc form-w3-agile-text2">
              <input
                type="text"
                name="Phone"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          <div className="field-agileinfo-spc form-w3-agile-text">
            <input type="email" name="Email" placeholder="Email" required />
          </div>
           <div className="main-button-for-ticket-booking">
          
           <div className="submit-button-flight-ticket">
                      <input type="submit" value="Submit" />
           </div>

           <div className="clear-from">

            
          <input type="reset" value="Clear Form" />

           </div>
          
       
        
          
             </div>
        </form>
      </div>
    </>
  );
}
