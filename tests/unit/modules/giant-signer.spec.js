// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import GiantSigner from '@/components/plugins/giant-signer/giant-signer';

jest.mock('@/components/plugins/giant-signer/giant-signer');

const $giantSigner = GiantSigner;

// TODO -- check token setting
describe('GiantSigner sing in', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $giantSigner,
    },
  });

  const auth = {
    username: 'admin',
    password: 'admin',
  };

  it('username and password is correct', () => {
    expect(wrapper.vm.$giantSigner.signIn(auth)).toBe(true);
  });

  it('get public key', () => {
    expect(wrapper.vm.$giantSigner.getPublicKey()).toBeTruthy();
  });

  it('user signOut', () => {
    expect(wrapper.vm.$giantSigner.signOut()).toBeUndefined();
  });

  // it('token was installed', () => {
  //   wrapper.vm.$giantSigner.signIn(auth);
  //   expect(wrapper.vm.cookie.get('user-token')).toBeTruthy();
  // });
});
