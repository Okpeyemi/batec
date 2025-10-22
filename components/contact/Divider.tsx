export default function Divider() {
  return (
    <div className="flex items-center justify-center w-full py-8">
      {/* Trait gauche */}
      <div className="flex-1 h-px bg-black"></div>
      
      {/* Cercle jaune */}
      <div className="w-12 h-12 bg-[#FFD700] rounded-full mx-4 flex-shrink-0"></div>
      
      {/* Trait droit */}
      <div className="w-[20%] h-px bg-black"></div>
    </div>
  );
}
