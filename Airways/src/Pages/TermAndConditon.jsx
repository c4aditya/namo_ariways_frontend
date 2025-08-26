import poster_image_aboutUs from "../videos/namo_plane_image.png"
import { NavLink } from "react-router-dom";
import term_and_condition_image from "../videos/term_and_condition_image.png"
function TermAndCondition() {
    return (
        <>
            <div className="marign-top"></div>
            <div className="top-aboutus">
                <div className="main-potser-section-image">
                    <div className="image-section">
                        <img className="image" src={term_and_condition_image} />
                              <div className="overlay">
                            <div className="overlaycontent">
                                <div className="overlay-heading">
                                    <h2>Term's And Conditions</h2>
                                </div>

                                <div className="page-link-page-title">
                                    <div className="page-link">
                                        <NavLink className="link-text" to="/">Home</NavLink>
                                    </div>
                                    <div className="mark">
                                        <p>{`>`}</p>
                                    </div>
                                    <div className="page-title">
                                        <p> Term's And Conditions </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top">
                <div className="main-terms-container">

                    {/* 1. Payment Terms & Methods */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Payment Terms & Methods</h2>
                        </div>
                        <div className="term-content">
                            <p>
                                For all contracted services, an advance payment is required to confirm your booking. The remaining balance can be paid either before you depart from your country or upon arrival in India, but always before services begin. The management reserves the right to decide the advance payment amount based on the type of service and the time left before commencement.
                            </p>
                            <ul>
                                <li><bold className="red">10%</bold> of the package amount must be paid in advance at the time of booking.</li>
                                <li><bold className="red">45%</bold> of the total amount must be paid within <bold className="red">3</bold> to <bold className="red">5</bold> days of booking.</li>
                                <li><bold className="red">25%</bold> of the total amount must be paid after hotel & cab confirmation.</li>
                                <li>The remaining <bold className="red">20%</bold> must be paid on the first day of the trip.</li>
                                <li>Discounts and vouchers are available on every holiday package.</li>
                                <li>In some cases, such as special train journeys, buses, hotels, or resort bookings during peak season, full payment may be required in advance.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Package Cancellation */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Package Cancellation</h2>
                        </div>
                        <div className="term-content">
                            <ul>
                                <li>No cancellation fees if cancelled <bold className="red">25</bold> to <bold className="red">30</bold> days before departure.</li>
                                <li><bold className="red">10%</bold>   cancellation charge if cancelled <bold className="red">20</bold> days prior to travel.</li>
                                <li><bold className="red">20%</bold>cancellation charge if cancelled <bold className="red">20</bold> days prior to travel.</li>
                                <li><bold className="red">50%</bold> of fees will be refunded if cancelled within <bold className="red">5</bold> days.</li>
                                <li><bold className="red">30%</bold>of fees will be refunded if cancelled within <bold className="red">3</bold> days.</li>
                                <li>No refund after <bold className="red">4</bold> hours of booking.</li>
                                <li>If the departure date is within <bold className="red">10</bold> days, full payment must be made at the time of booking.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Flight Reservation Policies */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Flight Reservation Policies</h2>
                        </div>
                        <div className="term-content">
                            <ul>
                                <li>Your reservation is confirmed only after full payment.</li>
                                <li>Your seat may be given to someone else without notice if you book without making payment.</li>
                                <li>A non-reserved seat is always considered unreserved.</li>
                                <li>Please keep track of your tentative booking before making full payment.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Flight Cancellation */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Flight Cancellation</h2>
                        </div>
                        <div className="term-content">
                            <ul>
                                <li><bold className="red">25%</bold> cancellation fee if cancellation is requested <bold className="red">30 - 40 </bold> days before departure.</li>
                                <li><bold className="red">50%</bold> cancellation fee if requested <bold className="red">15 - 30 </bold> days before departure.</li>
                                <li>No refund if cancellation is within <bold className="red">15</bold> days of departure.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Amendments by Users */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Amendments by Users</h2>
                        </div>
                        <div className="term-content">
                            <p>
                                <bold className="red">Namo Airways</bold> has full authority to recover cancellation fees as previously mentioned if a user cancels or amends their trip due to personal reasons, non-payment, accidents, injuries, or changes in plans. A written application is mandatory before amending or changing the original travel plans or booking. All cancellation fees apply to travel packages and bookings provided by <span className="color">Namo Airways</span> and do not cover services provided by third-party vendors on our website.
                            </p>
                            <ul>
                                <li>Namo Airways does not operate its own airlines  any changes made by airlines (such as flight timing or cancellations due to weather) are subject to the airline's terms and conditions.</li>
                                <li>If a user avails any third-party service via <bold className="red">Namo Airways</bold> and cancels, then cancellation fees will be as per the third party's terms and conditions.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 6. Travel Conditions */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Travel Conditions</h2>
                        </div>
                        <div className="term-content">
                            <ul>
                                <li>Travellers must follow the holiday package provided by <bold className="red">Namo Airways</bold> throughout the journey.</li>
                                <li>Namo Airways is not responsible for any unfortunate events resulting from changes made by the client during the journey.</li>
                                <li>No refund will be issued if the traveller does not avail or fails to avail the services included in the holiday package for any reason.</li>
                                <li><bold className="red">Namo Airways</bold> is not responsible for lost luggage or documents during travel.</li>
                                <li><bold className="red">Namo Airways</bold> may make changes to travel plans before or during the journey, and clients must comply.</li>
                                <li><bold className="red">Namo Airways</bold> reserves the right to cancel the tour of any traveller whose behaviour affects others or our staff.</li>
                                <li>Legal action may be taken against such travellers.</li>
                                <li><bold className="red">Namo Airways</bold> has the right to update or revise prices of travel packages and services at any time.</li>
                                <li>Any legal case against the company must be brought within <bold className="red">7 </bold> days from the last day of the tour; otherwise, the company is discharged from liability.</li>
                                <li>For any new service launched by Namo Airways, we may update or withdraw it at any time. If a user has availed such a service while the offer is valid, they will receive the benefit.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 7. Deal Of the Day Terms and Conditions */}
                    <div className="term-section">
                        <div className="term-heading">
                            <h2>Deal Of the Day Terms and Conditions</h2>
                        </div>
                        <div className="term-content">
                            <ul>
                                <li>GST is applicable over and above the package prices.</li>
                                <li>E-tickets for fixed departures will be sent <bold className="red">3</bold> days before departure.</li>
                                <li>All rates are net and non-commissionable.</li>
                                <li>The package price does not include personal expenses such as laundry, telephone calls, room service, alcoholic beverages, mini bar charges, tips, portage, camera fees, etc.</li>
                                <li>Meal plans: EP - Accommodation only; CP - Accommodation with breakfast; MAP - Accommodation with breakfast and one meal; AP - Accommodation with all meals.</li>
                                <li>Airline seats and hotel rooms are subject to availability at the time of booking.</li>
                                <li><bold className="red">Namo Airways</bold> is not responsible for any loss due to visa denial or delays. No refund will be applicable in such cases. Visa approval is at the discretion of the consulate/embassy.</li>
                                <li>If listed hotels are unavailable, alternate accommodation of similar standard will be provided.</li>
                                <li>Transportation will be provided as per the itinerary and not at disposal. (AC will not work in hilly areas.)</li>
                                <li>Package rates are subject to change without prior notice due to force majeure, strikes, festivals, weather, traffic, overbooking, cancellations, re-routing, closure, or entry restrictions at places of visit, etc. While we will try to make alternate arrangements, we are not liable for refunds or compensation claims arising from this.</li>
                                <li>All guests must carry valid photo ID (Passport, Driving License, Voter ID). PAN Card is not accepted as valid ID at many places.</li>
                                <li>Cancellation charges are calculated on the gross tour cost and depend on the date of departure and cancellation.</li>
                                <li>Cancellation charges for any transport ticket are as per the rules of the concerned authority.</li>
                                <li>Air tickets issued on special fares are guests shall bear cancellation charges.</li>
                                <li>Any refund (if applicable) will be processed after <span className="color">Namo Airways</span> receives it from the respective authorities, minus processing charges.</li>

                                <li>Please read the booking procedure provided in every package detail.</li>
                                <li><bold className="red">Namo Airways</bold> reserves the right to accept group and individual tour bookings, cancel bookings after payment without reason (with refund), dismiss guests for misbehaviour, withdraw discounts, change air travel routing, and alter hotels or tour programs due to unavoidable circumstances.</li>
                            </ul>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default TermAndCondition;
