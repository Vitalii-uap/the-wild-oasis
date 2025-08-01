// import { useQuery } from "@tanstack/react-query";
// import { isCabinNameUnique } from "../../services/apiCabins";

// export function useCheckCabinName(name) {
//   const {
//     data,
//     isLoading: isChecking,
//     error,
//   } = useQuery({
//     queryFn: () => isCabinNameUnique(name),
//     queryKey: ["check-cabin-name", name],
//     enabled: !!name,
//   });

//   return {
//     isUnique: data === true, // if name is unique
//     isChecking,
//     error,
//   };
// }
