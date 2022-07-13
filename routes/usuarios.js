const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosPost,
} = require("../controllers/usuarios");
const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.patch("/", usuariosPatch);
router.delete("/", usuariosDelete);
router.post("/", usuariosPost);

module.exports = router;
