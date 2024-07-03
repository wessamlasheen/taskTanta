import { Node } from "../types/node";

// export const data: Node[] = [
//   {
//     id: "0-0",
//     name: "/",
//     children: [
//       { id: "1-1", name: "not-found" },
//       { id: "1-2", name: "error" },
//       { id: "1-3", name: "/" },
//       {
//         id: "1-4",
//         name: "dashboard",
//         children: [
//           { id: "2-1", name: "not-found" },
//           { id: "2-2", name: "/" },
//           {
//             id: "2-3",
//             name: "branch",
//             children: [
//               { id: "3-1", name: "/" },
//               { id: "3-2", name: "admins", children: [] },
//               { id: "3-3", name: "branches", children: [] },
//               { id: "3-4", name: "insurance-companies", children: [] },
//               { id: "3-5", name: "patients", children: [] }
//             ]
//           },
//           { id: "2-4", name: "clinic", children: [] },
//           { id: "2-5", name: "employee", children: [] },
//           { id: "2-6", name: "super_admin", children: [] }
//         ]
//       },
//       { id: "1-5", name: "login", children: [] }
//     ]
//   }
// ];

export const data: Node[] = [
  {
    id: "0-0",
    name: "/",
    children: [
      { id: "1-1", name: "not-found" },
      { id: "1-2", name: "error" },
      { id: "1-3", name: "/" },
      {
        id: "1-4",
        name: "dashboard",
        children: [
          { id: "2-1", name: "not-found" },
          { id: "2-2", name: "/" },
          {
            id: "2-3",
            name: "branch",
            children: [
              { id: "3-1", name: "/" },
              { id: "3-2", name: "admins", children: [] },
              { id: "3-3", name: "branches", children: [] },
              { id: "3-4", name: "insurance-companies", children: [] },
              { id: "3-5", name: "patients", children: [] }
            ]
          },
          { id: "2-4", name: "clinic", children: [] },
          { id: "2-5", name: "employee", children: [] },
          { id: "2-6", name: "super_admin", children: [] }
        ]
      },
      { id: "1-5", name: "login", children: [] }
    ]
  }
];
