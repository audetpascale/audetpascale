import { createSlice } from "@reduxjs/toolkit";

export const plotSlice = createSlice({
  name: "plot",
  initialState: {
    annuals: [
      {
        name: "Solanacées",
        length: 655,
        width: 90,
        beds: {
          first: [{ name: "Avoine et pois", quantity: 16 }],
          last: [
            { name: "Tomate cerise", quantity: 5 },
            { name: "Cerise de terre", quantity: 2 },
            {
              name: "Piment",
              quantity: 1,
            },
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
            {
              name: "Carotte",
              quantity: 2,
            },
            { name: "Navet", quantity: 1 },
            { name: "Roquette", quantity: 2 },
            {
              name: "Laitue",
              quantity: 2,
            },
            { name: "Betterave", quantity: 2 },
            { name: "Haricot nain", quantity: 4 },
          ],
          last: [
            { name: "Épinard", quantity: 2 },
            { name: "Laitue", quantity: 1 },
            {
              name: "Roquette",
              quantity: 1,
            },
            { name: "Laitue", quantity: 1 },
            { name: "Moutarde", quantity: 1 },
            {
              name: "Céleri",
              quantity: 2,
            },
            { name: "Haricot grimpant", quantity: 2 },
            { name: "Roquette", quantity: 2 },
            {
              name: "Épinard",
              quantity: 4,
            },
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
            {
              name: "Courgette",
              quantity: 2,
            },
            { name: "Chou-fleur", quantity: 5 },
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
            {
              name: "Navet",
              quantity: 1,
            },
            { name: "Roquette", quantity: 1 },
            { name: "Radis", quantity: 1 },
            {
              name: "Carotte",
              quantity: 2,
            },
            { name: "Chicorée", quantity: 1 },
            { name: "Pois des neiges", quantity: 4 },
            {
              name: "Laitue",
              quantity: 1,
            },
          ],
          last: [
            { name: "Laitue", quantity: 4 },
            { name: "Mesclun", quantity: 9 },
            {
              name: "Chou chinois",
              quantity: 1,
            },
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
            {
              name: "Carotte",
              quantity: 4,
            },
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
            { name: "Brocoli", quantity: 3 },
            { name: "Chou chinois", quantity: 1 },
            {
              name: "Chou-rave",
              quantity: 1,
            },
            { name: "Kale", quantity: 1 },
            { name: "Courgette", quantity: 8 },
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
            {
              name: "Pois des neiges",
              quantity: 4,
            },
            { name: "Betterave", quantity: 1 },
            { name: "Navet", quantity: 1 },
            {
              name: "Épinard",
              quantity: 4,
            },
            { name: "Mesclun", quantity: 2 },
          ],
          last: [
            { name: "Carotte", quantity: 2 },
            { name: "Mesclun", quantity: 11 },
            {
              name: "Carotte",
              quantity: 3,
            },
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
            {
              name: "Oignon",
              quantity: 6,
            },
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
            {
              name: "Radis d'hiver",
              quantity: 3,
            },
            { name: "Chicorée", quantity: 1 },
            { name: "Kale", quantity: 2 },
            {
              name: "Chou chinois",
              quantity: 2,
            },
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
            {
              name: "Navet",
              quantity: 1,
            },
            { name: "Roquette", quantity: 1 },
            { name: "Radis", quantity: 1 },
            {
              name: "Betterave",
              quantity: 2,
            },
            { name: "Chicorée", quantity: 1 },
            { name: "Pois mange-tout", quantity: 4 },
            {
              name: "Laitue",
              quantity: 1,
            },
          ],
          last: [
            { name: "Laitue", quantity: 4 },
            { name: "Mesclun", quantity: 9 },
            {
              name: "Chou chinois",
              quantity: 1,
            },
            { name: "Chou", quantity: 2 },
          ],
        },
      },
    ],
    perennials: [
      {
        name: "A5",
        length: 400,
        width: 90,
        beds: [{ name: "Asperge", quantity: 16 }],
      },
      {
        name: "BG1",
        length: 75,
        width: 17.5,
        beds: [{ name: "Thym", quantity: 16 }],
      },
      {
        name: "BN1",
        length: 30,
        width: 30,
        beds: [{ name: "Ciboulette", quantity: 16 }],
      },
      {
        name: "BN2",
        length: 30,
        width: 30,
        beds: [{ name: "Ciboulette", quantity: 16 }],
      },
      {
        name: "BN3",
        length: 30,
        width: 30,
        beds: [{ name: "Menthe", quantity: 16 }],
      },
      {
        name: "BN4",
        length: 30,
        width: 30,
        beds: [{ name: "Ciboulette", quantity: 16 }],
      },
      {
        name: "BR1",
        length: 35,
        width: 75,
        beds: [{ name: "Souchet", quantity: 16 }],
      },
      {
        name: "BR2",
        length: 35,
        width: 75,
        beds: [{ name: "Souchet", quantity: 16 }],
      },
      {
        name: "C1",
        length: 2400,
        width: 25,
        beds: [{ name: "Caraganier", quantity: 16 }],
      },
      {
        name: "J1",
        length: 750,
        width: 75,
        beds: [{ name: "Fraise", quantity: 16 }],
      },
      {
        name: "M1",
        length: 720,
        width: 125,
        beds: [
          { name: "Échinacée", quantity: 6 },
          { name: "Oseille", quantity: 2 },
          {
            name: "Asperge",
            quantity: 2,
          },
          { name: "Millepertuis", quantity: 6 },
        ],
      },
      {
        name: "M2",
        length: 720,
        width: 125,
        beds: [{ name: "Asperge", quantity: 16 }],
      },
      {
        name: "R1",
        length: 1150,
        width: 90,
        beds: [
          { name: "Chou marin", quantity: 5 },
          { name: "Rhubarbe", quantity: 11 },
        ],
      },
      {
        name: "C2",
        length: 150,
        width: 750,
        beds: [
          { name: "Ail des bois", quantity: 5 },
          { name: "Plantain", quantity: 11 },
        ],
      },
    ],
  },
  reducers: {
    calculateCropQuantityPerBed: (state, { payload }) => {
      const calculate = (cropName, plotLength, plotWidth, bedQuantity) => {
        const crop = payload.crops.find(
          (crop) => crop.name === cropName.replace(" en dormance", "")
        );

        const rows = (bedQuantity * (plotLength / 16)) / crop.length;
        const cols = Math.ceil(plotWidth / crop.staggeredWidth);
        return {
          rows,
          rowsInCm: rows * crop.length,
          cols,
          colsInCm: (cols - 1) * crop.staggeredWidth,
          quantity: Math.round(rows * cols),
        };
      };

      state.annuals = state.annuals.map(({ length, width, beds, ...rest }) => ({
        ...rest,
        length,
        width,
        beds: {
          first: beds.first.map(({ name, quantity, ...rest }) => ({
            ...rest,
            name,
            quantity,
            crop: calculate(name, length, width, quantity),
          })),
          last: beds.last.map(({ name, quantity }) => ({
            name,
            quantity,
            crop: calculate(name, length, width, quantity),
          })),
        },
      }));

      state.perennials = state.perennials.map(
        ({ length, width, beds, ...rest }) => ({
          ...rest,
          length,
          width,
          beds: beds.map(({ name, quantity, ...rest }) => ({
            ...rest,
            name,
            quantity,
            crop: calculate(name, length, width, quantity),
          })),
        })
      );
    },
  },
});

export const { calculateCropQuantityPerBed } = plotSlice.actions;

export default plotSlice.reducer;
