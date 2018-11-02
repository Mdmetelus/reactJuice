render() {
        const{ contacts } = this.state;

        return (
             <div>
                {contacts.map (contact => (
                    <<Contact key= {contact.id} contact=
                    {contact} />
                )) }
            </div>
       );
                }

    )


    export default Contacts