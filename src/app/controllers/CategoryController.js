const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;
    // verificação do name estar preenchido
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });
    // metodo do arquivo categoriesrepository
    response.json(category);
  }

  async categories(request, response) {
    // request.query.orderBy
    const { name } = request.params;

    // Listar todos os registros
    const contacts = await CategoriesRepository.findCategory(name);
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoriesRepository.findById(id);
    if (!category) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(category);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name,
    } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);
    if (!categoryExists) { // verificando se um id existe
      return response.status(400).json({ error: 'User not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, {
      name,
    });

    response.json(category);
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;
    await CategoriesRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
