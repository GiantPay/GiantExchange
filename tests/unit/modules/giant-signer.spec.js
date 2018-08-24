// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import GiantSigner from '@/components/plugins/giant-signer/giant-signer';

jest.mock('@/components/plugins/giant-signer/giant-signer');

const $giantSigner = GiantSigner;

const auth = {
  username: 'admin',
  password: 'admin',
};

// TODO -- check token setting
describe('GiantSigner authorization', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $giantSigner,
    },
  });

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

describe('GiantSigner event listeners', () => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $giantSigner,
    },
  });

  it('signIn listener return needs value', () => {
    wrapper.vm.$giantSigner.on('signIn', (e) => console.log('e', e));
    wrapper.vm.$giantSigner.signIn(auth);
    // Check result of listener
  });

  it('signOut listener return needs value', () => {
    wrapper.vm.$giantSigner.on('signOut', (e) => console.log('e', e));
    wrapper.vm.$giantSigner.signOut();
    // Check result of listener
  });

  it('expired listener return needs value', () => {
    wrapper.vm.$giantSigner.on('expired', (e) => console.log('e', e));
    wrapper.vm.$giantSigner.expired();
    // Check result of listener
  });
});
