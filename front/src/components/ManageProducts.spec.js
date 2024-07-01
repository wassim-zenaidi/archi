// ManageProducts.spec.js

import { mount } from '@vue/test-utils';
import ManageProducts from './ManageProducts.vue'; // Assurez-vous d'importer correctement votre composant

describe('ManageProducts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ManageProducts);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should clear form after successful product creation', async () => {
    // Simuler l'entrée de données dans le formulaire
    await wrapper.setData({
      newProduct: {
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        stock: 10,
        number: 'T123'
      }
    });

    // Simuler la soumission du formulaire
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Attendre que les produits soient mis à jour
    await wrapper.vm.$nextTick();

    // Vérifier que le formulaire est vidé après la création
    expect(wrapper.vm.newProduct.name).toBe('');
    expect(wrapper.vm.newProduct.description).toBe('');
    expect(wrapper.vm.newProduct.price).toBeNull();
    expect(wrapper.vm.newProduct.stock).toBeNull();
    expect(wrapper.vm.newProduct.number).toBe('');
  });

  // Ajoutez d'autres tests en fonction des fonctionnalités que vous souhaitez tester
});
