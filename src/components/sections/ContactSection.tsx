"use client";

import React from "react";
// import { useApi } from "@/context/ApiContext";

export default function ContactSection() {
  // const { registerButtonClick } = useApi();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     await registerButtonClick("contact-form-submit", "contact-section", {
  //       timestamp: new Date().toISOString(),
  //       section: "contact",
  //       formType: "contact",
  //     });

  //     alert("Formulário enviado! (Clique registrado)");
  //   } catch (error) {
  //     console.error("Erro ao registrar clique:", error);
  //   }
  // };

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="scroll-animate">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                {/* <p className="text-gray-300 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-7">
                  <div className="bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Endereço</h4>
                    <p className="text-gray-300">Porto Alegre, RS</p>
                  </div>
                </div>

                <div className="flex items-center space-x-7">
                  <div className="bg-green-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contato@digitalverts.com</p>
                  </div>
                </div>
                {/*                 
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-900 p-3 rounded-full">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Telefone</h4>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
