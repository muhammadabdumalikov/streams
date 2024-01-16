export class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject;
  }

  creditCard({ id, username, age }) {
    console.log(`\na payment occured from ${username} ${age}`);
    this.paymentSubject.notify({id, username});
  }
}