import Funcionario from '../models/model.js';

let funcionarios = [
  new Funcionario(1, 'João Silva', 'Desenvolvedor'),
  new Funcionario(2, 'Maria Souza', 'Gerente'),
  new Funcionario(3, 'Ana Oliveira', 'Designer')
];

// Obter todos os funcionários
export const obterTodosFuncionarios = (req, res) => {
  res.json(funcionarios);
};
 


// Adicionar novo funcionário
export const adicionarFuncionario = (req, res) => {
  const { id, nome, cargo } = req.body;
  const novoFuncionario = new Funcionario(id, nome, cargo);
  funcionarios.push(novoFuncionario);
  res.status(201).json(novoFuncionario);
};


// Deletar funcionário
export const deletarFuncionario = (req, res) => {
  const id = parseInt(req.params.id);
  funcionarios = funcionarios.filter(func => func.id !== id);
  res.status(204).send();
};