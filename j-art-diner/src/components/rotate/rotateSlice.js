import { createSlice } from "@reduxjs/toolkit";

export const rotateSlice = createSlice({
  name: "rotate",
  initialState: {
    plots: [
      {
        name: "Solanacées",
        length: 655,
        width: 90,
        beds: {
          first: [{ name: "Avoine et pois", quantity: 16 }],
          last: [
            { name: "Tomate cerise", quantity: 5 },
            { name: "Cerise de terre", quantity: 2 },
            { name: "Piment", quantity: 1 },
            { name: "Poivron", quantity: 2 },
            { name: "Melon", quantity: 6 },
          ],
        },
      },
      {
        name: "Verdures-racines",
        length: 655,
        width: 90,
        beds: {
          first: [
            { name: "Haricot grimpant", quantity: 2 },
            { name: "Radis", quantity: 1 },
            { name: "Carotte", quantity: 2 },
            { name: "Navet", quantity: 1 },
            { name: "Roquette", quantity: 2 },
            { name: "Laitue", quantity: 2 },
            { name: "Betterave", quantity: 2 },
            { name: "Haricot nain", quantity: 4 },
          ],
          last: [
            { name: "Épinard", quantity: 2 },
            { name: "Laitue", quantity: 1 },
            { name: "Roquette", quantity: 1 },
            { name: "Laitue", quantity: 1 },
            { name: "Moutarde", quantity: 1 },
            { name: "Bette à carde", quantity: 2 },
            { name: "Haricot grimpant", quantity: 2 },
            { name: "Roquette", quantity: 2 },
            { name: "Épinard", quantity: 4 },
          ],
        },
      },
      {
        name: "Cuccurbites et crucifères primeurs",
        length: 655,
        width: 90,
        beds: {
          first: [{ name: "Avoine et pois", quantity: 16 }],
          last: [
            { name: "Brocoli", quantity: 4 },
            { name: "Chou", quantity: 3 },
            { name: "Courgette", quantity: 1 },
            { name: "Chou-fleur", quantity: 2 },
            { name: "Brocoli", quantity: 4 },
            { name: "Chou-rave", quantity: 2 },
          ],
        },
      },
      {
        name: "Verdures-racines",
        length: 655,
        width: 90,
        beds: {
          first: [
            { name: "Carotte", quantity: 4 },
            { name: "Coriandre", quantity: 1 },
            { name: "Navet", quantity: 1 },
            { name: "Roquette", quantity: 1 },
            { name: "Radis", quantity: 1 },
            { name: "Betterave", quantity: 2 },
            { name: "Chicorée", quantity: 1 },
            { name: "Pois des neiges", quantity: 4 },
            { name: "Laitue", quantity: 1 },
          ],
          last: [
            { name: "Laitue", quantity: 4 },
            { name: "Mesclun", quantity: 9 },
            { name: "Chou chinois", quantity: 1 },
            { name: "Chou", quantity: 2 },
          ],
        },
      },
      {
        name: "Ail",
        length: 585,
        width: 90,
        beds: {
          first: [
            { name: "Ail", quantity: 4 },
            { name: "Échalote de Sainte-Anne", quantity: 12 },
          ],
          last: [{ name: "Avoine et pois", quantity: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 585,
        width: 75,
        beds: {
          first: [
            { name: "Mesclun", quantity: 4 },
            { name: "Haricot grimpant", quantity: 4 },
            { name: "Carotte", quantity: 4 },
            { name: "Laitue", quantity: 4 },
          ],
          last: [
            { name: "Ail en dormance", quantity: 4 },
            {
              name: "Échalote de Sainte-Anne en dormance",
              quantity: 12,
            },
          ],
        },
      },
      {
        name: "Cuccurbites et crucifères primeurs",
        length: 585,
        width: 90,
        beds: {
          first: [
            { name: "Brocoli", quantity: 8 },
            { name: "Chou chinois", quantity: 1 },
            { name: "Chou-rave", quantity: 1 },
            { name: "Kale", quantity: 1 },
            { name: "Courgette", quantity: 3 },
            { name: "Chou-fleur", quantity: 2 },
          ],
          last: [{ name: "Avoine et pois", quantity: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 585,
        width: 90,
        beds: {
          first: [
            { name: "Mesclun", quantity: 2 },
            { name: "Carotte", quantity: 2 },
            { name: "Pois des neiges", quantity: 4 },
            { name: "Betterave", quantity: 1 },
            { name: "Navet", quantity: 1 },
            { name: "Épinard", quantity: 4 },
            { name: "Mesclun", quantity: 2 },
          ],
          last: [
            { name: "Betterave", quantity: 2 },
            { name: "Mesclun", quantity: 11 },
            { name: "Carotte", quantity: 3 },
          ],
        },
      },
      {
        name: "Liliacées",
        length: 585,
        width: 90,
        beds: {
          first: [
            { name: "Oignon vert", quantity: 6 },
            { name: "Poireau", quantity: 4 },
            { name: "Oignon", quantity: 6 },
          ],
          last: [{ name: "Avoine et pois", quantity: 16 }],
        },
      },
      {
        name: "Verdures-racines",
        length: 750,
        width: 100,
        beds: {
          first: [{ name: "Mesclun", quantity: 16 }],
          last: [
            { name: "Carotte", quantity: 2 },
            { name: "Haricot grimpant", quantity: 2 },
            { name: "Radis d'hiver", quantity: 3 },
            { name: "Chicorée", quantity: 1 },
            { name: "Kale", quantity: 2 },
            { name: "Chou chinois", quantity: 2 },
            { name: "Radis", quantity: 1 },
            { name: "Persil", quantity: 1 },
            { name: "Navet", quantity: 2 },
          ],
        },
      },
      {
        name: "Solanacées",
        length: 750,
        width: 100,
        beds: {
          first: [{ name: "Moutarde", quantity: 16 }],
          last: [
            { name: "Tomate", quantity: 12 },
            { name: "Tomate italienne", quantity: 4 },
          ],
        },
      },
      {
        name: "Verdures-racines",
        length: 750,
        width: 75,
        beds: {
          first: [
            { name: "Carotte", quantity: 4 },
            { name: "Coriandre", quantity: 1 },
            { name: "Navet", quantity: 1 },
            { name: "Roquette", quantity: 1 },
            { name: "Radis", quantity: 1 },
            { name: "Betterave", quantity: 2 },
            { name: "Chicorée", quantity: 1 },
            { name: "Pois des neiges", quantity: 4 },
            { name: "Laitue", quantity: 1 },
          ],
          last: [
            { name: "Laitue", quantity: 4 },
            { name: "Mesclun", quantity: 9 },
            { name: "Chou chinois", quantity: 1 },
            { name: "Chou", quantity: 2 },
          ],
        },
      },
    ],
  },
  reducers: {
    calculateBedAmount: (state, { payload }) => {
      const calculateAmount = (bedLength, bedWidth, name, number) => {
        const data = payload.plants.find(
          (plant) => plant.name === name.replace(" en dormance", "")
        );
        const rows = (number * bedLength) / 16 / data.length;
        const cols = Math.ceil(bedWidth / data.staggeredWidth);
        const quantity = Math.round(rows * cols);
        return {
          rows: rows,
          rowsInCm: rows * data.length,
          cols,
          colsInCm: (cols - 1) * data.staggeredWidth,
          quantity,
        };
      };

      state.plots = state.plots.map(({ length, width, beds, ...rest }) => ({
        ...rest,
        length,
        width,
        beds: {
          first: beds.first.map(({ name, quantity }) => ({
            name,
            quantity,
            plantQuantity: calculateAmount(length, width, name, quantity),
          })),
          last: beds.last.map(({ name, quantity }) => ({
            name,
            quantity,
            plantQuantity: calculateAmount(length, width, name, quantity),
          })),
        },
      }));
    },
  },
});

export const { calculateBedAmount } = rotateSlice.actions;

export default rotateSlice.reducer;
