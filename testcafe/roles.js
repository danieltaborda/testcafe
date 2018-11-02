import { Role, Selector, t } from 'testcafe';
import { url } from './config';

const loggedUser = Role(url.login, async t => {
    // login as a registered user
    await t
        .typeText('#usr', 'admin')
        .typeText('#pwd', '12345')
        .click(Selector('input').withAttribute('type', 'submit'));
}, { preserveUrl: true });

export { loggedUser };