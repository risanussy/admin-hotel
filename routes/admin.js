const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);
router.get("/dashboard", adminController.viewDashboard);
// endpoint category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);
// endpoint bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);
// endpoint item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

// endpoint detail item
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);

router.post("/item/add/activity", uploadSingle, adminController.addActivity);
router.put("/item/update/activity", uploadSingle, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);

router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.showDetailBooking);
router.put("/booking/:id/confirmation", adminController.actionConfirmation);
router.put("/booking/:id/reject", adminController.actionReject);

router.get("/room", adminController.viewRoom);

// member
router.get("/member", adminController.viewMember);
router.post("/member/add", adminController.addMember);
router.put("/member", adminController.editMember);
router.delete("/member/:id", adminController.deleteMember);

//  room

router.get("/room", adminController.viewRoom);
router.post("/room", uploadMultiple, adminController.addRoom);
router.get("/room/show-image/:id", adminController.showImageRoom);
router.get("/room/:id", adminController.showEditRoom);
router.put("/room/:id", uploadMultiple, adminController.editRoom);
router.delete("/room/:id/delete", adminController.deleteRoom);

// endpoint detail room
router.get("/room/show-detail-room/:roomId", adminController.viewDetailRoom);
router.post("/room/add/feature", uploadSingle, adminController.addFeature);
router.put("/room/update/feature", uploadSingle, adminController.editFeature);
router.delete("/room/:roomId/feature/:id", adminController.deleteFeature);

module.exports = router;
