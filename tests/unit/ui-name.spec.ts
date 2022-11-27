import { shallowMount } from '@vue/test-utils';
import Name from '@/components/Ui/Tag/Name.vue';
import { TAG } from '@/@types';

const overview = TAG.OVERVIEW;
const onBus = TAG.ON_BUS;
const historical = TAG.HISTORICAL;

describe('Name.vue', () => {
  it('render tag name Обзорная', () => {
    const name = 'Обзорная';
    const wrapper = shallowMount(Name, {
      propsData: { name: overview },
    });
    expect(wrapper.text()).toMatch(name);
  });
  it('render tag name На автобусе', () => {
    const name = 'На автобусе';
    const wrapper = shallowMount(Name, {
      propsData: { name: onBus },
    });
    expect(wrapper.text()).toMatch(name);
  });
  it('render tag name Историческая', () => {
    const name = 'Историческая';
    const wrapper = shallowMount(Name, {
      propsData: { name: historical },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
