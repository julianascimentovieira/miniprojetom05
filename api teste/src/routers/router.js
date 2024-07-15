import express from 'express';
import { obterTodosFuncionarios, adicionarFuncionario, deletarFuncionario } from '../controllers/controller.js';

 export const router = express.Router();

router.get('/funcionarios', obterTodosFuncionarios);

router.post('/funcionarios', adicionarFuncionario);

router.delete('/funcionarios/:id', deletarFuncionario);