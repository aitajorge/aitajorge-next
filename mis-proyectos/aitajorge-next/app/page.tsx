import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header/Navegación Simple */}
      <header className="container mx-auto p-4 border-b border-gray-200">
        <nav className="flex justify-end gap-4 items-center text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Inicio</Link>
            <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard Privado</Link>
            <Link href="aitajorge.com.ar" className="text-gray-600 hover:underline">Redes</Link>
            <Link href="aitajorge.com.ar" className="text-gray-600 hover:underline">Diarios</Link>
            {/* Aquí irían otros enlaces como Diccio, Herram, etc. */}
        </nav>
      </header>

      {/* Contenido Principal con Estilo de la Imagen */}
      <main className="container mx-auto p-8 flex flex-col md:flex-row">
        
        {/* Columna Izquierda: Imagen del Perfil */}
        <div className="w-full md:w-1/3 pr-8">
          {/* Aquí necesitarás tu imagen real. Por ahora, un placeholder */}
          <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
            <span className="text-gray-500">Espacio para la imagen (314x922px)</span>
          </div>
        </div>

        {/* Columna Derecha: Texto y Contenido */}
        <div className="w-full md:w-2/3 mt-8 md:mt-0">
          <p className="text-sm text-gray-500 mb-4">aitajorge.com.ar</p>
          
          <h2 className="text-md text-gray-700 mb-2">
            Displaced domain and inverted causality: a compositional structure across formal, symbolic, and geometric spaces
          </h2>
          <h3 className="text-md text-gray-700 mb-2">
            Dominio desplazado y causalidad invertida: una estructura composicional entre espacios formales, simbólicos y geométricos
          </h3>
          
          {/* El texto destacado en tono marrón/naranja */}
          <div className="text-lg font-bold text-[#96693B] mt-6"> 
            Dominio desplazado... -completo
          </div>
          
          {/* Información de contacto del footer movida aquí temporalmente */}
          <div className="mt-20 text-xs text-gray-500">
            © 2019 Jorge-Aita-Psicoanalista Buenos Aires-Argentina-Neolo Argentina Consultor Av. Las Heras y Austria-Tel: 549 11 6175 2700.
          </div>
        </div>
      </main>
    </div>
  );
}

