import createFakeContact from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
  let contacts = [];
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(fileData);
  } catch (err) {
    console.log(err);
  }
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};

generateContacts(2);
