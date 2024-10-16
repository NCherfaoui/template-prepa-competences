export default function Widget() {
    return (
        <div className="p-6 bg-background rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-6">BILAN « Prépa Compétences »</h1>
            
            <div className="mb-6">
                <label className="block text-muted-foreground">Centre AFPA de :</label>
                <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Agence France Travail de :" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-muted-foreground">Nom du référent AFPA :</label>
                    <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Nom" />
                    <label className="block text-muted-foreground">Téléphone :</label>
                    <input type="tel" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Téléphone" />
                    <label className="block text-muted-foreground">Mail :</label>
                    <input type="email" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Mail" />
                </div>
                <div>
                    <label className="block text-muted-foreground">Nom du conseiller référent France Travail :</label>
                    <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Prescripteur" />
                    <label className="block text-muted-foreground">Téléphone :</label>
                    <input type="tel" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Téléphone" />
                    <label className="block text-muted-foreground">Mail :</label>
                    <input type="email" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Mail" />
                    <label className="block text-muted-foreground">Nom du référent :</label>
                    <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Nom du référent" />
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Le bénéficiaire :</h2>
                <label className="block text-muted-foreground">Nom :</label>
                <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Nom" />
                <label className="block text-muted-foreground">Prénom :</label>
                <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Prénom" />
                <label className="block text-muted-foreground">Identifiant :</label>
                <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Identifiant" />
                <label className="block text-muted-foreground">Téléphone :</label>
                <input type="tel" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="N_tel" />
                <label className="block text-muted-foreground">Mail :</label>
                <input type="email" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Mail" />
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Adhésion suite au premier entretien</h2>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" /> <span className="text-muted-foreground">OUI</span>
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" className="mr-2" /> <span className="text-muted-foreground">NON</span>
                </div>
                <label className="block text-muted-foreground">Date d'entrée dans le dispositif :</label>
                <input type="date" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" />
                <label className="block text-muted-foreground">Si non-adhésion, quel en est le motif ?</label>
                <textarea className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" rows="3" placeholder="Motif"></textarea>
            </div>
            <div className="mb-6">
                <label className="block text-muted-foreground">Signature du bénéficiaire :</label>
                <input type="text" className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" placeholder="Signature" />
            </div>
            <div className="mb-6">
                <label className="block text-muted-foreground">Métier(s) ou secteur(s) d’activité ciblé(s) :</label>
                <textarea className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" rows="3" placeholder="Secteurs ciblés"></textarea>
            </div>
            <div className="mb-6">
                <label className="block text-muted-foreground">Contacts réalisés avec le conseiller France Travail et/ou autre organisme de suivi :</label>
                <textarea className="border border-border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary" rows="3" placeholder="Contacts"></textarea>
            </div>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 p-3 rounded-lg transition duration-200">Générer PDF</button>
        </div>
        
        
    )
}
