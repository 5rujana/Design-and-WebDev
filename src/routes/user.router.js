import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserprofileImage,
} from "../controllers/auth.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "profileImage", 
            maxCount:1
        }
    ]), //returns middleware that processes multiple files associated with the given form feild
    registerUser)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/get-user").get(verifyJWT, getCurrentUser)
router.route("/update-attach-details").patch(verifyJWT, updateAccountDetails)
router.route("/profilePhoto").patch(verifyJWT, upload.single("profilePhoto"), updateUserprofileImage)


export default router