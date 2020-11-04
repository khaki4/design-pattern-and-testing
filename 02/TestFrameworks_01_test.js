describe("createReservation(passenger, flight)", () => {
  const testPassenger = {
    firstName: "jiwon",
    lastName: "jung",
  };

  const testFlight = {
    firstName: "3443",
    lastName: "Korean Air",
    destination: "woolsan",
  };
  it("주어진 passenger를 passengerInfo 프로퍼티에 할당한다.", () => {
    const reservation = createReservation(testPassenger, testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });

  it("주어진 flight를 flightInfo 프로퍼티에 할당한다.", () => {
    const reservation = createReservation(testPassenger, testFlight);
    expect(reservation.flightInfo).toBe(testFlight);
  });
});
