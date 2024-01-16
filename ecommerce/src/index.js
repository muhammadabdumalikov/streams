import { Payment } from "./events/payment.js";
import Marketing from "./observer/marketing.js";
import Shipment from "./observer/shipment.js";
import PaymentSubject from "./subjects/paymentSubjects.js";

const subject = new PaymentSubject();

const marketing = new Marketing();
subject.subscribe(marketing);

const shipment = new Shipment();
subject.subscribe(shipment);

const payment = new Payment(subject);
payment.creditCard({id: 1, username: 'Eric', age: 7});