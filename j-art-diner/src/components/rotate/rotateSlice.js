import { createSlice } from "@reduxjs/toolkit";

export const rotateSlice = createSlice({
  name: "rotate",
  initialState: {
    plots: [
      {
        name: "Cuccurbites et crucifères primeurs",
        length: 585,
        beds: {
          first: [
            { name: "Brocoli", length: 3 },
            { name: "Bok choy", length: 1 },
            { name: "Chou-rave", length: 1 },
            { name: "Kale", length: 1 },
            { name: "Brocoli", length: 5 },
            { name: "Courgette", length: 3 },
            { name: "Chou-fleur", length: 2 },
          ],
          last: [{ name: "Engrais vert", length: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 585,
        beds: {
          first: [
            { name: "Mesclun", length: 2 },
            { name: "Pois", length: 4 },
            { name: "Carotte", length: 2 },
            { name: "Betterave", length: 1 },
            { name: "Navet", length: 1 },
            { name: "Épinard", length: 1 },
            { name: "Mesclun", length: 2 },
            { name: "Épinard", length: 3 },
          ],
          last: [
            { name: "Betterave", length: 2 },
            { name: "Mesclun", length: 8 },
            { name: "Carotte", length: 3 },
            { name: "Mesclun", length: 3 },
          ],
        },
      },
      {
        name: "Ail",
        length: 585,
        beds: {
          first: [{ name: "Ail", length: 16 }],
          last: [{ name: "Engrais vert", length: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 585,
        beds: {
          first: [
            { name: "Mesclun", length: 4 },
            { name: "Haricot", length: 4 },
            { name: "Carotte", length: 4 },
            { name: "Laitue", length: 4 },
          ],
          last: [{ name: "Ail", length: 16 }],
        },
      },
      {
        name: "Solanacées",
        length: 655,
        beds: {
          first: [{ name: "Engrais vert", length: 16 }],
          last: [
            { name: "Aubergine", length: 5 },
            { name: "Cerise de terre", length: 2 },
            { name: "Piment fort", length: 1 },
            { name: "Poivron", length: 2 },
            { name: "Melon", length: 6 },
          ],
        },
      },
      {
        name: "Verdures-racines",
        length: 655,
        beds: {
          first: [
            { name: "Haricot", length: 2 },
            { name: "Radis", length: 1 },
            { name: "Navet", length: 1 },
            { name: "Carotte", length: 2 },
            { name: "Roquette", length: 2 },
            { name: "Laitue", length: 2 },
            { name: "Betterave", length: 2 },
            { name: "Haricot", length: 4 },
          ],
          last: [
            { name: "Épinard", length: 2 },
            { name: "Laitue", length: 2 },
            { name: "Roquette", length: 1 },
            { name: "Moutarde", length: 1 },
            { name: "Bette", length: 2 },
            { name: "Haricot", length: 2 },
            { name: "Roquette", length: 2 },
            { name: "Épinard", length: 4 },
          ],
        },
      },
      {
        name: "Cuccurbites et crucifères primeurs",
        length: 655,
        beds: {
          first: [{ name: "Engrais vert", length: 16 }],
          last: [
            { name: "Brocoli", length: 4 },
            { name: "Chou d'été", length: 2 },
            { name: "Chou de Bruxelles", length: 1 },
            { name: "Courgette", length: 1 },
            { name: "Chou-fleur", length: 2 },
            { name: "Brocoli", length: 4 },
            { name: "Chou-rave", length: 2 },
          ],
        },
      },
      {
        name: "Verdures-racines",
        length: 655,
        beds: {
          first: [
            { name: "Carotte", length: 4 },
            { name: "Coriandre", length: 1 },
            { name: "Navet", length: 1 },
            { name: "Radis", length: 1 },
            { name: "Roquette", length: 1 },
            { name: "Betterave", length: 2 },
            { name: "Chicorée", length: 1 },
            { name: "Pois", length: 4 },
            { name: "Laitue", length: 1 },
          ],
          last: [
            { name: "Laitue", length: 4 },
            { name: "Mesclun", length: 9 },
            { name: "Chou chinois", length: 1 },
            { name: "Chou collard", length: 1 },
            { name: "Fenouil", length: 1 },
          ],
        },
      },
      {
        name: "Liliacées",
        length: 750,
        beds: {
          first: [
            { name: "Oignon vert", length: 6 },
            { name: "Poireau", length: 4 },
            { name: "Oignon de conservation", length: 6 },
          ],
          last: [{ name: "Engrais vert", length: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 750,
        beds: {
          first: [{ name: "Mesclun", length: 16 }],
          last: [
            { name: "Carotte", length: 2 },
            { name: "Haricot", length: 2 },
            { name: "Radis d'hiver", length: 3 },
            { name: "Chicorée", length: 1 },
            { name: "Kale", length: 2 },
            { name: "Chou chinois", length: 2 },
            { name: "Persil", length: 1 },
            { name: "Navet", length: 1 },
            { name: "Radis", length: 1 },
            { name: "Navet", length: 1 },
          ],
        },
      },
      {
        name: "Solanacées",
        length: 750,
        beds: {
          first: [{ name: "Moutarde", length: 16 }],
          last: [{ name: "Tomate", length: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 750,
        beds: {
          first: [
            { name: "Carotte", length: 4 },
            { name: "Coriandre", length: 1 },
            { name: "Navet", length: 1 },
            { name: "Radis", length: 1 },
            { name: "Roquette", length: 1 },
            { name: "Betterave", length: 2 },
            { name: "Chicorée", length: 1 },
            { name: "Pois", length: 4 },
            { name: "Laitue", length: 1 },
          ],
          last: [
            { name: "Laitue", length: 4 },
            { name: "Mesclun", length: 9 },
            { name: "Chou chinois", length: 1 },
            { name: "Chou collard", length: 1 },
            { name: "Fenouil", length: 1 },
          ],
        },
      },
    ],
  },
  reducers: {
    convertCelsiusToFahrenheit: (state, { payload }) => {
      state.celsius = payload;
      if (isNaN(state.celsius)) {
        state.fahrenheit = "Non Numérique";
      } else {
        state.fahrenheit = (Number(state.celsius) * 9) / 5 + 32;
      }
    },
  },
});

export const { convertCelsiusToFahrenheit } = rotateSlice.actions;

export default rotateSlice.reducer;
