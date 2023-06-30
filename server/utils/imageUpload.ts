import type { EventHandler } from "h3";
import multer from "multer";
import { callNodeListener } from "h3";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const config = useRuntimeConfig();

let s3 = new S3Client({
  region: "us-east-2",
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});
const awsStorage = multerS3({
  s3: s3,
  bucket: config.ROOT_BUCKET,
  key: function (request, file, cb) {
    const fullPath = Date.now() + "_" + file.originalname;
    cb(null, fullPath);
  },
});

const upload = multer({
  storage: awsStorage,
  limits: {
    fileSize: parseInt(config.IMAGE_UPLOAD_SIZE_LIMIT),
  },
  fileFilter(req, file, cb) {
    if (
      !file.originalname.match(
        /\.(jpeg|JPEG|png|PNG|webp|WEBP|jpg|JPG|gif|GIF)$/
      )
    ) {
      return cb(new Error("Please upload image file only"));
    }
    cb(null, true);
  },
});

export const imageUploadHandler = (handler: EventHandler) =>
  defineEventHandler(async (event) => {
    try {
      await callNodeListener(
        // @ts-expect-error: Nuxt 3
        upload.fields([
          { name: "logo", maxCount: 1 },
          { name: "banner", maxCount: 1 },
          { name: "cover", maxCount: 1 },
          { name: "screenshot1", maxCount: 1 },
          { name: "screenshot2", maxCount: 1 },
          { name: "screenshot3", maxCount: 1 },
          { name: "screenshot4", maxCount: 1 },
        ]),
        event.node.req,
        event.node.res
      );
      const response = await handler(event);

      return { response };
    } catch (err) {
      console.log("upload error ", err);
      event.res.statusCode = 500;
      return {
        error: "Something went wrong at server!",
      };
    }
  });
