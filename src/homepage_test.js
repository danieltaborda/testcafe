import { Role, Selector, t } from 'testcafe';
import { loggedUser } from '../testcafe/roles';
import { url } from '../testcafe/config';

fixture `SmokePackTest`
    .page(url.welcome)
    .beforeEach(async t => { 
        await t.useRole(loggedUser) 
    });

test('When login to welcome page', async t => {
    // your are logged in
    await t.expect(Selector('.success').innerText)
        .eql('WELCOME :)');
});
