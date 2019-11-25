export class ServiceRoutes {
    public static BASE_API_URL() {
        return "http://localhost:8000/api";
    }
}

export class ShotgunRoutes {
    private static BASE_SHOTGUN_URL() {
        return `${ServiceRoutes.BASE_API_URL()}/shotguns`;
    }

    public static GET_SHOTGUNS() {
        return ShotgunRoutes.BASE_SHOTGUN_URL();
    }

    public static GET_SHOTGUN_BY_ID(id: number) {
        return `${ShotgunRoutes.BASE_SHOTGUN_URL()}/${id}`;
    }

    public static CREATE_SHOTGUN() {
        return ShotgunRoutes.BASE_SHOTGUN_URL();
    }
}

export class FamilleRoutes {
    private static BASE_FAMILLE_URL() {
        return `${ServiceRoutes.BASE_API_URL()}/familles`;
    }

    public static GET_FAMILLES() {
        return FamilleRoutes.BASE_FAMILLE_URL();
    }

    public static GET_FAMILLES_SHOTGUNS() {
      return `${FamilleRoutes.BASE_FAMILLE_URL()}/shotguns`;
  }
}

export class PartieCommunesRoutes {
    private static BASE_PARTIE_COMMUNES_URL() {
        return `${ServiceRoutes.BASE_API_URL()}/parties-communes`;
    }

    public static GET_PARTIES_COMMUNES() {
        return PartieCommunesRoutes.BASE_PARTIE_COMMUNES_URL();
    }

    public static GET_PARTIES_COMMUNES_SHOTGUNS() {
      return `${this.GET_PARTIES_COMMUNES()}/shotguns`;
  }
}

export class ResidenceRoutes {
  private static BASE_RESIDENCE_URL() {
    return `${ServiceRoutes.BASE_API_URL()}/residences`;
  }

  public static GET_RESIDENCES() {
    return ResidenceRoutes.BASE_RESIDENCE_URL();
  }

  public static GET_RESIDENCES_SHOTGUNS() {
    return `${ResidenceRoutes.BASE_RESIDENCE_URL()}/shotguns`;
  }
}
