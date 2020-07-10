import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Cadastros',
    icon: 'layout-outline',
    children: [
      {
        title: 'Empresas',
        link: '/pages/cadastros/empresas',
      },
      
      {
        title: 'Clientes',
        link: '/pages/cadastros/clientes',
      },
      {
        title: 'Fornecedores',
        link: '/pages/cadastros/fornecedores',
      },
      {
        title: 'Produtos',
        link: '/pages/cadastros/produtos',
      }
      
    ],
  },
  {
    title: 'Comercial',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'CRM',
        link: '/pages/comercial/crm',
      },
      
      {
        title: 'Cotação Elêtrônica',
        link: '/pages/comercial/cotacao',
      },

      {
        title: 'E-commerce',
        link: '/pages/comercial/ecommerce',
      },
    ],
  },
  {
    title: 'Financeiro',
    icon: 'credit-card-outline',
    children: [
      {
        title: 'Contas a Pagar',
        link: '/pages/financeiro/contas-pagar',
      },
      
      {
        title: 'Contas a Receber',
        link: '/pages/financeiro/contas-receber',
      },
           
      {
        title: 'Fluxo de Caixa',
        link: '/pages/financeiro/fluxo-caixa',
      },

      {
        title: 'Ciclo Financeiro Operacional',
        link: '/pages/financeiro/ciclo-financeiro',
      },
      {
        title: 'Margem de Contribuição ',
        link: '/pages/financeiro/margem-contribuicao',
      },
      {
        title: 'Controle de Inadimplência ',
        link: '/pages/financeiro/controle-inadimplencia',
      },
      {
        title: 'Ponto de Equilíbrio ',
        link: '/pages/financeiro/ponto-equilibrio',
      },
     
    ],
  },
  {
    title: 'Contabilidade',
    icon: 'layers-outline',
    children: [
      {
        title: 'Documentos',
        link: '/pages/contabilidade/documentos',
      },
      {
        title: 'Falar com a Contabilidade',
        link: '/pages/contabilidade/falar-contabilidade',
      },
      
     
    ],
  },
  {
    title: 'Pessoas',
    icon: 'person-outline',
    children: [
      {
        title: 'Folha de Pagamento',
        link: '/pages/pessoas/folha-pagamento',
      },
      {
        title: 'Recrutamento e Seleção',
        link: '/pages/pessoas/recrutamento',
      },
      {
        title: 'Automação - Ponto Eletrônico',
        link: '/pages/pessoas/automacao-ponto',
      },
      {
        title: 'Banco de Currículos',
        link: '/pages/pessoas/banco-curriculo',
      },
    ],
  },
  {
    title: 'Consultoria',
    icon: 'smiling-face-outline',
    children: [
      {
        title: 'Planejamento',
        link: '/pages/consultoria/consultoria',
      },
      {
        title: 'Mercado',
        link: '/pages/consultoria/mercado',
      },
      {
        title: 'Organização',
        link: '/pages/organizacao/organizacao',
      },
      {
        title: 'Finanças',
        link: '/pages/financas/financas',
      },
    ],
  },
  
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
