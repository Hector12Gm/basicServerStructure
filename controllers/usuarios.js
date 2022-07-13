const { response, request } = require("express");

const usuariosGet = function (req = request, res = response) {
  const { q, nombre, apikey } = req.query;

  res.json({ msg: "get API-controlador", q, nombre, apikey });
};

const usuariosPut = function (req = request, res = response) {
  const id = req.params.id;

  res.json({ msg: "put API", id });
};

const usuariosPost = function (req = request, res = response) {
  const body = req.body;

  res.json({ msg: "post API", body });
};

const usuariosDelete = function (req = request, res = response) {
  res.json({ msg: "delete API" });
};

const usuariosPatch = function (req = request, res = response) {
  res.json({ msg: "patch API" });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
