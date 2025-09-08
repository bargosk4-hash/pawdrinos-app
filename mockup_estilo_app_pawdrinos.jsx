import React, { useState } from "react";
import { PawPrint, CalendarCheck, Heart, Sparkles, MapPin, Clock, Users, Shield, Dog, Cat, ChevronRight, ArrowLeft, Phone, Mail, Globe, Star, Info, Camera } from "lucide-react";

// Mock data
const sessions = [
  {
    id: 1,
    title: "Yoga suave con perritos",
    level: "Inicial",
    date: "Sáb, 21 Sep",
    time: "10:00 AM",
    spots: 8,
    location: "Chapinero, Bogotá",
    price: "$45.000",
    animals: ["perros"],
    description:
      "Sesión enfocada en respiración y estiramientos suaves. Ideal para reducir estrés y conectar con la energía de la manada.",
  },
  {
    id: 2,
    title: "Mindfulness & gatoterapia",
    level: "Todos los niveles",
    date: "Dom, 22 Sep",
    time: "4:30 PM",
    spots: 6,
    location: "Cedritos, Bogotá",
    price: "$49.000",
    animals: ["gatos"],
    description:
      "Meditación guiada con atención plena, ronroneo y relajación progresiva. Espacio silencioso y cálido.",
  },
  {
    id: 3,
    title: "Flow mix: yoga con perros y gatos",
    level: "Intermedio",
    date: "Mié, 25 Sep",
    time: "7:00 PM",
    spots: 10,
    location: "Virrey, Bogotá",
    price: "$55.000",
    animals: ["perros", "gatos"],
    description:
      "Flujo dinámico de movilidad y balance. Conexión cuerpo-mente y momentos de contacto asistido con animales.",
  },
];

function PhoneFrame({ children }) {
  return (
    <div className="mx-auto w-[360px] h-[740px] bg-neutral-900/5 rounded-[40px] p-3 shadow-2xl">
      <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden border border-neutral-200">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-40 h-6 bg-black/80 rounded-full" />
        {children}
      </div>
    </div>
  );
}

function TopBar({ title, onBack }) {
  return (
    <div className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-neutral-200">
      <div className="flex items-center gap-3 px-4 py-3">
        {onBack ? (
          <button onClick={onBack} className="p-2 rounded-2xl hover:bg-neutral-100">
            <ArrowLeft size={18} />
          </button>
        ) : (
          <div className="w-9" />
        )}
        <div className="flex items-center gap-2 mx-auto">
          <PawPrint size={18} className="text-orange-500" />
          <span className="font-semibold tracking-tight">Pawdrinos</span>
        </div>
        <div className="w-9" />
      </div>
    </div>
  );
}

function TabBar({ current, setCurrent }) {
  const tabs = [
    { key: "home", label: "Inicio", icon: Sparkles },
    { key: "explore", label: "Sesiones", icon: CalendarCheck },
    { key: "book", label: "Reservar", icon: Heart },
    { key: "about", label: "Nosotros", icon: Info },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-neutral-200 bg-white">
      <div className="grid grid-cols-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setCurrent(t.key)}
            className={`flex flex-col items-center py-2 text-xs ${
              current === t.key ? "text-orange-600" : "text-neutral-500"
            }`}
          >
            <t.icon size={18} />
            <span className="mt-1">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function HomeScreen({ goToExplore }) {
  return (
    <div className="px-4 pb-24">
      <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 shadow-sm">
        <div className="flex items-center gap-2">
          <PawPrint className="text-orange-500" size={20} />
          <h1 className="text-lg font-semibold">Bienvenido a Pawdrinos</h1>
        </div>
        <p className="mt-2 text-sm text-neutral-600">
          Yoga y mindfulness acompañados por perros y gatos para bajar el estrés,
          mejorar el ánimo y crear momentos felices.
        </p>
        <button
          onClick={goToExplore}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600"
        >
          Explorar sesiones <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <FeatureCard icon={Dog} title="Con perritos" subtitle="Energía y juego" />
        <FeatureCard icon={Cat} title="Con gatitos" subtitle="Calma y foco" />
        <FeatureCard icon={Shield} title="Seguro e higiénico" subtitle="Animales entrenados" />
        <FeatureCard icon={Users} title="Para todos" subtitle="Niños a mayores" />
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-neutral-800">Próximas sesiones</h2>
        <div className="mt-2 space-y-3">
          {sessions.slice(0, 2).map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="p-3 rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-orange-50">
          <Icon className="text-orange-500" size={18} />
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function SessionCard({ session, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold leading-tight">{session.title}</p>
          <p className="text-xs text-neutral-500 mt-1">
            {session.level} • {session.date} • {session.time}
          </p>
          <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
            <MapPin size={14} /> {session.location}
          </p>
          <p className="text-xs text-neutral-500 mt-1 flex items-center gap-1">
            <Clock size={14} /> Cupos: {session.spots}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-orange-600">{session.price}</p>
          <div className="mt-2 flex gap-1 justify-end">
            {session.animals.includes("perros") && (
              <div className="px-2 py-1 text-[10px] rounded-full bg-orange-50 text-orange-600 border border-orange-100">Perros</div>
            )}
            {session.animals.includes("gatos") && (
              <div className="px-2 py-1 text-[10px] rounded-full bg-rose-50 text-rose-600 border border-rose-100">Gatos</div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function ExploreScreen({ goToDetail }) {
  return (
    <div className="px-4 pb-24">
      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-base font-semibold">Explorar sesiones</h2>
        <div className="text-xs text-neutral-500">Bogotá D.C.</div>
      </div>
      <div className="mt-3 grid gap-3">
        {sessions.map((s) => (
          <SessionCard key={s.id} session={s} onClick={() => goToDetail(s)} />
        ))}
      </div>
    </div>
  );
}

function DetailScreen({ session, onBack, onBook }) {
  return (
    <div className="pb-24">
      <TopBar onBack={onBack} />
      {/* Hero placeholder */}
      <div className="mx-4 mt-3 h-40 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
        <Camera className="text-neutral-400" />
        <span className="ml-2 text-neutral-500 text-sm">Imagen del espacio / animales</span>
      </div>

      <div className="px-4 mt-4 space-y-2">
        <h1 className="text-lg font-semibold">{session.title}</h1>
        <p className="text-sm text-neutral-600">{session.description}</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <InfoRow icon={<Clock size={16} />} label="Horario" value={`${session.date} • ${session.time}`} />
          <InfoRow icon={<Users size={16} />} label="Cupos" value={`${session.spots}`} />
          <InfoRow icon={<MapPin size={16} />} label="Ubicación" value={session.location} />
          <InfoRow icon={<Star size={16} />} label="Nivel" value={session.level} />
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-semibold text-orange-600">{session.price}</span>
          <button onClick={onBook} className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600">Reservar</button>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="p-3 rounded-2xl border border-neutral-200 bg-white flex items-center gap-2">
      <div className="p-2 rounded-xl bg-neutral-50">{icon}</div>
      <div>
        <p className="text-[11px] text-neutral-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function BookScreen({ onConfirm }) {
  return (
    <div className="px-4 pb-24">
      <div className="mt-4">
        <h2 className="text-base font-semibold">Reservar sesión</h2>
        <p className="text-sm text-neutral-600 mt-1">
          Selecciona fecha, horario y preferencia de animales.
        </p>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="p-3 rounded-2xl border border-neutral-200 bg-white">
          <p className="text-xs text-neutral-500">Fecha</p>
          <div className="mt-2 flex gap-2">
            {["21 Sep", "22 Sep", "25 Sep"].map((d) => (
              <button key={d} className="px-3 py-2 rounded-xl border border-neutral-200 text-sm hover:bg-neutral-50">
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-2xl border border-neutral-200 bg-white">
          <p className="text-xs text-neutral-500">Horario</p>
          <div className="mt-2 flex gap-2">
            {["10:00 AM", "4:30 PM", "7:00 PM"].map((h) => (
              <button key={h} className="px-3 py-2 rounded-xl border border-neutral-200 text-sm hover:bg-neutral-50">
                {h}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-2xl border border-neutral-200 bg-white">
          <p className="text-xs text-neutral-500">Preferencia</p>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-2 rounded-xl border border-orange-200 bg-orange-50 text-orange-700 text-sm">Perros</button>
            <button className="px-3 py-2 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-sm">Gatos</button>
            <button className="px-3 py-2 rounded-xl border border-neutral-200 text-sm">Mixto</button>
          </div>
        </div>
      </div>

      <button onClick={onConfirm} className="mt-4 w-full py-3 rounded-2xl bg-orange-500 text-white font-medium hover:bg-orange-600">
        Confirmar reserva
      </button>

      <p className="text-[11px] text-neutral-500 mt-2 text-center">
        Al continuar aceptas términos y condiciones.
      </p>
    </div>
  );
}

function AboutScreen() {
  return (
    <div className="px-4 pb-24">
      <div className="mt-4 space-y-2">
        <h2 className="text-base font-semibold">Sobre Pawdrinos</h2>
        <p className="text-sm text-neutral-600">
          Combinamos bienestar físico y emocional con la compañía de animales.
          Nuestras sesiones están guiadas por instructores certificados y
          acompañadas por perros y gatos entrenados en espacios seguros e higiénicos.
        </p>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <Stat label="Bienestar" icon={<Heart size={16} />} />
          <Stat label="Seguro" icon={<Shield size={16} />} />
          <Stat label="Comunidad" icon={<Users size={16} />} />
        </div>
        <div className="p-3 rounded-2xl border border-neutral-200 bg-white">
          <p className="text-xs text-neutral-500 mb-2">Contacto</p>
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-neutral-500" /> <span>+57 300 000 0000</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <Mail size={16} className="text-neutral-500" /> <span>hola@pawdrinos.co</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <Globe size={16} className="text-neutral-500" /> <span>pawdrinos.co</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, icon }) {
  return (
    <div className="p-3 rounded-2xl border border-neutral-200 bg-white flex items-center gap-2 justify-center">
      <div className="p-2 rounded-xl bg-neutral-50">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

export default function PawdrinosAppMockup() {
  const [tab, setTab] = useState("home");
  const [detail, setDetail] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-orange-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <PawPrint className="text-orange-500" /> Mockup estilo app — Pawdrinos
        </h1>
        <p className="mt-2 text-neutral-600 max-w-2xl">
          Prototipo visual navegable con pantallas clave: Inicio, Sesiones, Detalle y Reserva. Ideal para presentar la propuesta y validar el flujo de servicio.
        </p>

        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-start">
          {/* Phone preview */}
          <PhoneFrame>
            {!detail ? (
              <>
                <TopBar />
                {tab === "home" && <HomeScreen goToExplore={() => setTab("explore")} />} 
                {tab === "explore" && <ExploreScreen goToDetail={(s) => setDetail(s)} />} 
                {tab === "book" && <BookScreen onConfirm={() => alert("Reserva enviada ✨") } />} 
                {tab === "about" && <AboutScreen />} 
                <TabBar current={tab} setCurrent={setTab} />
              </>
            ) : (
              <>
                <DetailScreen session={detail} onBack={() => setDetail(null)} onBook={() => setTab("book")} />
                <TabBar current={tab} setCurrent={setTab} />
              </>
            )}
          </PhoneFrame>

          {/* Notes / handoff */}
          <div className="space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-semibold">Cómo presentar el mockup</h3>
              <ol className="mt-2 list-decimal list-inside text-sm text-neutral-700 space-y-1">
                <li>Empieza en Inicio y explica la propuesta (yoga + mascotas).</li>
                <li>Entra a Sesiones y abre un Detalle para mostrar información clave.</li>
                <li>Haz clic en Reservar para evidenciar el flujo de reserva.</li>
                <li>Cierra con la sección Nosotros para remarcar seguridad y contacto.</li>
              </ol>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="font-semibold">Personalización rápida</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-neutral-700 space-y-1">
                <li>Edita títulos, precios y ubicaciones en el arreglo <code>sessions</code>.</li>
                <li>Reemplaza el placeholder de imagen en Detalle con fotos reales.</li>
                <li>Ajusta colores y acentos cambiando clases de Tailwind (ej. <code>text-orange-600</code>).</li>
                <li>Agrega autenticación o pagos simulados si necesitas más realismo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
