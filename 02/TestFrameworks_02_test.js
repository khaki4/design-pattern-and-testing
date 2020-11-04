describe("createReservation02(passenger, flight)", () => {
  const testPassenger = {
    firstName: "jiwon",
    lastName: "jung",
  };

  const testFlight = {
    firstName: "3443",
    carrier: "Korean Air",
    destination: "woolsan",
  };

  it("주어진 passenger를 passengerInfo 프로퍼티에 할당한다.", () => {
    const reservation = createReservation02(testPassenger, testFlight);
    expect(reservation.passengerInfomation).toBe(testPassenger);
  });
});
