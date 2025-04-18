import express from "express";
import { upload, checkFileSize } from "../middlewares/fileStore.js";

import {
  createReservation,
  getReservationDetails,
  approveReservation,
  getAllReservationDetails,
  rejectReservation,
  holdReservation,
  getPendingReservations,
  getApprovedReservations,
  getRejectedReservations,
  getReservationDocuments,
  updateReservation,
  getRooms,
  addRoom,
  deleteRoom,
  updateRooms,
  sendNotification,
  updatePaymentStatus,
  getCurrentReservations,
  getPaymentPendingReservations,
  getCheckedOutReservations,
  getLateCheckoutReservations,
  checkoutReservation,
  checkoutToday,
  getDiningAmount,
  deleteReservations,
  removeFromList,
  EditReservation,
  getAllRooms,
  updateRoomBookings,
  monthlyReport,
  withdrawApplication,
  sendReminder,
  sendReminderAll,
} from "../controllers/reservation.js";

const Router = express.Router();


Router.post(
  "/",
  checkFileSize,
  upload.fields([
    { name: "files", maxCount: 5 },
    { name: "receipt", maxCount: 1 },
  ]),
  createReservation
);

Router.put(
  "/edit/:id",
  checkFileSize,
  upload.fields([
    { name: "files", maxCount: 5 },
    { name: "receipt", maxCount: 1 },
  ]),
  EditReservation
);

Router.post("/send-reminder-all", sendReminderAll);
Router.post("/send-reminder", sendReminder);
Router.delete("/withdraw/:id", withdrawApplication);
Router.get("/reports/monthly/:month", monthlyReport);
Router.put("/rooms/:id/update", updateRoomBookings);
Router.get("/room-details", getAllRooms);
Router.get("/all", getAllReservationDetails);
Router.get("/current", getCurrentReservations);
Router.get("/late", getLateCheckoutReservations);
Router.get("/checkedout", getCheckedOutReservations);
Router.get("/pending", getPendingReservations);
Router.get("/approved", getApprovedReservations);
Router.get("/rejected", getRejectedReservations);
Router.get("/documents/:id", getReservationDocuments);
Router.get("/rooms", getRooms);
Router.get("/payment/pending", getPaymentPendingReservations);
Router.get("/checkout/today", checkoutToday);
Router.get("/:id", getReservationDetails);
Router.put("/rooms/:id/remove", removeFromList);
Router.put("/checkout/:id", checkoutReservation);
Router.put("/rooms/:id", updateRooms);
Router.put("/approve/:id", approveReservation);
Router.put("/reject/:id", rejectReservation);
Router.put("/hold/:id", holdReservation);
Router.put("/payment/:id", updatePaymentStatus);
Router.put("/:id", updateReservation);

Router.post("/rooms", addRoom);
Router.post("/:id", getDiningAmount);

Router.delete("/rooms", deleteRoom);
Router.delete("/", deleteReservations);

export default Router;
