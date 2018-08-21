// import { shallowMount } from '@vue/test-utils';
import GiantSigner from '@/modules/giant-signer/';
// import Home from '@/views/Home.vue';

jest.mock('@/modules/giant-signer/');

describe('GiantSigner sing in', () => {
  it('username and password is correct', () => {
    // const wrapper = shallowMount(Home);
    const auth = {
      username: 'admin',
      password: 'admin',
    };
    // console.log('---', wrapper.vm);
    expect(GiantSigner.signIn(auth)).toBe(true);
  });

  it('token was installed', () => {
    const auth = {
      username: 'admin',
      password: 'admin',
    };
    GiantSigner.signIn(auth);
    expect(localStorage.getItem('user-token')).toBeTruthy();
  });
});
