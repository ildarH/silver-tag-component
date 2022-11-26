import { shallowMount } from '@vue/test-utils';
import Name from '@/components/Ui/Tag/Name.vue';
import { TAG } from '@/utils';

const overview = TAG.OVERVIEW;

describe('Name.vue', () => {
  it('render tag name', () => {
    const name = 'Обзорная';
    const wrapper = shallowMount(Name, {
      propsData: { name: overview },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
